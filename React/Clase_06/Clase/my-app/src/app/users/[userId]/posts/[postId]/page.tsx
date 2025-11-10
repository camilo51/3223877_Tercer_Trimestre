'use client'

import { useParams } from "next/navigation"

export default function Post() {

    const {userId, postId} = useParams();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold">Post {postId} del usuario {userId    }</h1>
        </div>
    )
}