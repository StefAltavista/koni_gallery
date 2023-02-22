const preloadImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
        return new Promise((res, rej) => {
            const img = new Image();
            img.src = src;
            img.onload = res();
            img.onerror = rej();
        });
    });

    await Promise.all(promises);
};
export default preloadImages;
