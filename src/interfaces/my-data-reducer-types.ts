export type myDataType = {
    _id: string,
    name: string,
    role: string,
    experience: string,
    projects: string[],
    tasks: string[],
    stack: string,
    sideInfo: string,
}

export type myDataReducerType = {
    myData: myDataType,
}