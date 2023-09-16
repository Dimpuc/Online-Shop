export const createFakeUser = () => {
    const id = Math.floor(Math.random() * 100);

    sessionStorage.setItem("sessionID", id.toString());

    return {
        id,
    };
};