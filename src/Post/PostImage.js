const PostImage = ({ config }) => {
    // const relativeImageURL=`../image/${config.PostImage}`;
    return <div className="PostImageWrapper">
    <img className="image" src={REACT_APP_FRONTEND + `${config.image}`} alt="" />
    {/* <img src={relativeImageURL} alt={config.description}/> */}
    </div>;
};
export default PostImage;
