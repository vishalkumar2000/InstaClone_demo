const PostImage = ({ config }) => {
    // const relativeImageURL=`../image/${config.PostImage}`;
    return <div className="PostImageWrapper">
    <img className="image" src={`http://localhost:9000/${config.image}`} alt="" />
    {/* <img src={relativeImageURL} alt={config.description}/> */}
    </div>;
};
export default PostImage;
