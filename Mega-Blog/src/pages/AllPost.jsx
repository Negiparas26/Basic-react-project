import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/ComponentIndex'
import appwriteService from "../appwriteService/config";
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const userId = useSelector((state)=>(state.userData))
    useEffect(() => {
        appwriteService.getPosts(userId).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} /> 
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts