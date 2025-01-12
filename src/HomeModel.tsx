import { useRef, useEffect, Suspense } from 'react';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { AxesHelper, GridHelper, CameraHelper } from 'three';

type HomeModelProps = {
    url: string;
    position: [number, number, number];
    scale: number; 
}


function CustomCamera() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(10, 60, 10);
        camera.lookAt(300, 0, 0);
        camera.near = 5;
        camera.far = 200; 
        camera.updateProjectionMatrix();
    }, [camera]);

    return null; 
}

const HomeModel: React.FC<HomeModelProps> = ({ url, position, scale}) => {
    //const meshRef = useRef();
    const { scene } = useGLTF(url);
    useEffect(() => {
        if (scene) {
            console.log("scene is fine");
        }
    }, [scene]);

    useEffect(() => { // rotation 
        if (scene) {
            scene.rotation.z = Math.PI / 2; 
            //scene.rotation.y = Math.PI;
        }
    }, [scene]); 

    useEffect(() => {  
        if (!scene) {
            console.log("scene is not fine");
            // return a static image to save your ass instead 
        }
    }, [scene]);

    return (
    <Canvas style={{ height: '100%', width: '100%' }}>
        <CustomCamera />
        <Suspense fallback={null}>
        <primitive object={scene} position={position} scale={scale} />;
        <Environment preset="sunset" />
        <OrbitControls />

        <axesHelper args={[500]} /> {/* red = x, green = y, blue = z */}
        <gridHelper args={[500, 500]} />
        </Suspense> 
    </Canvas>
    );
}

export default HomeModel;