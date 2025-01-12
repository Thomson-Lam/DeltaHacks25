import { useRef, useEffect, Suspense } from 'react';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { AxesHelper, GridHelper, CameraHelper } from 'three';
import * as THREE from 'three'; 

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
        camera.near = 1;
        camera.far = 100; 
        camera.updateProjectionMatrix();
    }, [camera]);

    return null; 
}

function CameraAnimate() {
    const { camera } = useThree();
    const targetZ = 30;
    const speed = 0.1; 

    useFrame(() => {
        camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            targetZ,
            speed
        );
        camera.updateProjectionMatrix(); 
    });

    return null; 
}


const HomeModel: React.FC<HomeModelProps> = ({ url, position, scale}) => {
    const meshRef = useRef();
    const { scene } = useGLTF(url);
    
    useEffect(() => { // rotation 
        if (scene) {
            scene.rotation.z = Math.PI * 2; 
            //scene.rotation.y = Math.PI;
        }
    }, [scene]); 


    return (
    <Canvas style={{ height: '100%', width: '100%' }}>
        <CustomCamera />
        <CameraAnimate />
        <Suspense fallback={null}>
        <primitive ref={meshRef} object={scene} position={position} scale={scale} />;
        <Environment preset="sunset" />
        <OrbitControls />

        <axesHelper args={[500]} /> {/* red = x, green = y, blue = z */}
        <gridHelper args={[500, 500]} />
        </Suspense> 
    </Canvas>
    );
}

export default HomeModel;