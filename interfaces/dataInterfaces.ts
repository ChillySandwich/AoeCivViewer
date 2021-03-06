export interface ICivilization {
    id: number;
    name: string;
    expansion: string;
    army_type: string;
    unique_unit: string[];
    unique_tech: string[];
    team_bonus: string;
    civilization_bonus: string[];
}

export interface IMenuAppBarProps{
    name: string;
}