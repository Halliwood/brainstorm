export interface BSEvent {
    id: number, 
    date: string, 
    stocks: string[], 
    cause: string, 
    detail: string, 
    tags: string[]
}

export interface BSExperience {
    details: string[], 
    tags: string[], 
    events: number[]
}