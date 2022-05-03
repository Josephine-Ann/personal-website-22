const PhotoWrapper = ({ children }) => {
    return <div className="lan:hidden block w-[100vw] h-[100vh] relative pt-[50%]">{children}</div>;
}

const LandscapePhotoWrapper = ({ children }) => {
    return <div className="hidden lan:block xl:w-[100vw] xl:h-[100vh] xl:relative xl:pt-[50%]">{children}</div>;
}

export { PhotoWrapper, LandscapePhotoWrapper } 