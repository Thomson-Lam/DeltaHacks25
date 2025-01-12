import { useEffect, Suspense } from 'react';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

type HomeModelProps = {
    url: string;
    position: [number, number, number];
    scale: number; 
}

type CameraProps = {
    position: [number, number, number];
    fov: number;
};

const cameraSettings: CameraProps = {
    position: [-20, 200, -20],
    fov: 80,
};

function CustomCamera() {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.set(20, 200, 200);
        camera.lookAt(0,0,0);
        camera.near = 0.1;
        camera.far = 1000; 
        camera.updateProjectionMatrix();
    }, [camera]);

    return null; 
}


const HomeModel: React.FC<HomeModelProps> = ({ url, position, scale}) => {
    const { scene } = useGLTF(url);
    return (
    <Canvas style={{  height: '100%', width: '100%' }}>
        <CustomCamera />
        <Suspense fallback={null}>
        <primitive object={scene} position={position} scale={scale} />;
        <Environment preset="sunset" />
        </Suspense> 
        <OrbitControls />
    </Canvas>
    );
}

export default HomeModel;