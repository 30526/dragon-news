import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold text-primary mb-5'>Login With</h2>
            <button className='btn btn-outline w-full mb-3 border-secondary text-secondary hover:bg-secondary hover:text-white'><FcGoogle size={24} /> Login With Google</button>
            <button className='btn btn-outline w-full border-primary hover:bg-primary hover:text-white'><ImGithub size={22} /> Login With Google</button>
            
        </div>
    );
};

export default SocialLogin;