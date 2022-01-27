const useTimer = () => {
  const setIntervalFunction = (intervalFunction) => {
    setInterval(() => {
      intervalFunction();
    }, 60000);
  };

  return [null, setIntervalFunction];
};

export default useTimer;
