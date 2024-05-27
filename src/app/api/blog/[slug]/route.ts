import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";

import { NextResponse } from "next/server";

export const GET = async (
  request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  console.log(slug);

  try {
    connectToDb();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (
  request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
