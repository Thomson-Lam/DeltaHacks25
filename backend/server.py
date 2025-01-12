#filepath: /c:/Users/laval/OneDrive/Desktop/DeltaHacks/DeltaHacks25/backend/server.py
import os
import json
from os import environ as env
from urllib.parse import quote_plus, urlencode
from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__)
app.secret_key = os.getenv("APP_SECRET_KEY")

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    trees = db.Column(db.Integer, nullable=False, default=0)

# Ensure the database schema is created
with app.app_context():
    db.create_all()

oauth = OAuth(app)

oauth.register(
    "auth0",
    client_id=os.getenv("AUTH0_CLIENT_ID"),
    client_secret=os.getenv("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{os.getenv("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)

@app.route("/login")
def login():
    return oauth.auth0.authorize_redirect(
        redirect_uri=url_for("callback", _external=True)
    )

@app.route("/callback", methods=["GET", "POST"])
def callback():
    try:
        token = oauth.auth0.authorize_access_token()
        user_info = token["userinfo"]
        
        # Check if the user exists in the local database
        user = User.query.filter_by(email=user_info["email"]).first()
        if not user:
            # Create a new user record in the local database
            user = User(
                username=user_info["nickname"],
                email=user_info["email"],
                trees=0  # Default value for trees
            )
            db.session.add(user)
            db.session.commit()
        
        # Store user information in the session
        session["user"] = user_info
        return redirect("/")
    except Exception as e:
        app.logger.error(f"Error during callback: {e}")
        return "An error occurred during login", 500

@app.route("/logout")
def logout():
    session.clear()
    return redirect(
        "https://" + os.getenv("AUTH0_DOMAIN")
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("home", _external=True),
                "client_id": os.getenv("AUTH0_CLIENT_ID"),
            },
            quote_via=quote_plus,
        )
    )

@app.route("/api/user")
def api_user():
    user = session.get('user')
    return jsonify({"user": user})

if __name__ == "__main__":
    app.debug = True
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))