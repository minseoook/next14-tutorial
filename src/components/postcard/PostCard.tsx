import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

type Props = {
  post: {
    _id: string;
    userId: string;
    title: string;
    desc: string;
    slug: string;
    img: string;
  };
};
const PostCard = ({ post }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>{Date.now()}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
