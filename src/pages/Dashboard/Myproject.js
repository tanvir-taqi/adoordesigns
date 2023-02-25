import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinning from '../../components/Spinning';
import MySingleProject from './MySingleProject';

const Myproject = () => {
    const [myprojectLoader, setMyprojectLoader] = useState(false)
    const { data: myprojects = [], isLoading, refetch } = useQuery({
        queryKey: ['all'],
        queryFn: async () => {
            const res = await fetch(`https://apidesigns.adoordesigns.com/allprojects/all`)
            const data = await res.json();
            return data
        }

    })

    const handleDeleteMyProject = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this project')
        if (!proceed) {
            refetch()
            return
        } else {
            setMyprojectLoader(true)
            fetch(`https://apidesigns.adoordesigns.com/myproject/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        setMyprojectLoader(false)
                    } else {
                        refetch()
                        setMyprojectLoader(false)
                    }
                })
                .catch(err => {
                    refetch()
                    setMyprojectLoader(false)
                })

        }
    }

    const handleIndexUpdate = (id, indexValue) =>{
        if(!indexValue){
            alert('Please Input new Index value')
            return
        }
        setMyprojectLoader(true)
        fetch(`https://apidesigns.adoordesigns.com/myproject/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({indexValue:parseInt(indexValue)})
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    setMyprojectLoader(false)
                } else {
                    refetch()
                    setMyprojectLoader(false)
                }
            })
            .catch(err => {
                refetch()
                setMyprojectLoader(false)
            })
    }

    if (isLoading || myprojectLoader) {
        return <Spinning></Spinning>
    }

    return (
        <div className='py-20'>
            <h1 className='text-4xl font-extrabold text-secondary'>My Projects</h1>
            {
                myprojects.map(mp => <MySingleProject
                    key={mp._id}
                    project={mp}
                    handleDeleteMyProject={handleDeleteMyProject}
                    handleIndexUpdate={handleIndexUpdate}
                ></MySingleProject>)
            }
        </div>
    );
};

export default Myproject;