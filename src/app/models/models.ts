export interface Ability{
    ability:{
        name: string;
        url: string;
    }
}

export interface Models {
    
    
    hability: {
        id: number;
        name: string;
        height: number;
        weight: number;
        base_experiencie: number;
        abilities: Ability[];
        sprites: SpeechRecognitionResult;
        url?: string
    }

}
