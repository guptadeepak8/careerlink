import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { ProfilePopover } from '../ProfilePopover';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { authUser } = useSelector(store => store.auth);
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between  mx-4 h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Career<span className='text-[#db6767]'>Link</span></h1>
                </div>
                <div className='flex items-center'>
                    <ul className='flex font-medium items-center gap-12'>
                        {
                            authUser && authUser.role === "recruiter" ? (
                                <>
                                    <li className='hover:bg-[#7a59b4] hover:text-white cursor-pointer px-4 py-2 rounded-xl'><Link to={"/admin/companies"}>Companies</Link></li>
                                    <li className='hover:bg-[#7a59b4] hover:text-white cursor-pointer px-4 py-2 rounded-xl'><Link to={"/admin/jobs"}>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className='hover:bg-[#7a59b4] hover:text-white cursor-pointer px-4 py-2 rounded-xl'><Link to={"/"}>Home</Link></li>
                                    <li className='hover:bg-[#7a59b4] hover:text-white cursor-pointer px-4 py-2 rounded-xl'><Link to={"/jobs"}>Jobs</Link></li>
                                    <li className='hover:bg-[#7a59b4] hover:text-white cursor-pointer px-4 py-2 rounded-xl'><Link to={"/browse"}>Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                    

                </div>
                <div>
                {
                        authUser ? (
                            <ProfilePopover />
                        ) : (
                            <div className='flex items-center gap-4'>
                                <Link to="/login"><Button variant={'outline'}>Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5f32ad]">Signup</Button></Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar