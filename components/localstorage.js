let apps_name = `kedaiEmasOnline_${process.env.KEDAI}`

const SetLocalStorage = (value) => {
    try {
        window.localStorage.setItem(apps_name, JSON.stringify(value))
    } catch (e){

    }
}

const GetLocalStorage = (initialValue) => {
    try {
        const value = window.localStorage.getItem(apps_name)
        return value ? JSON.parse(value) : initialValue
    } catch (e){
        return initialValue
    }
}

export { SetLocalStorage, GetLocalStorage}