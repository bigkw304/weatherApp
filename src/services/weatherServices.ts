const createWeatherService = () => {

    const getWeatherData = async (location: string) => {
        const result = await fetch ("");

        return result;
    };

    return {
        getWeatherData
    };
};

export const weatherServices = createWeatherService();
