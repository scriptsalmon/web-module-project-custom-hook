import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('darkMode', initialValue);

    return [value, setValue];
}

//non visual behavior
//business logic
//stateful logic
//happens behind the scenes that has nothing to do with the UI. ends up affecting UI but doesnt return JSX or classes