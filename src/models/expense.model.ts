export interface Expense {
    id?: string;
    date: string;
    amount: number;
    category: string;
    description: string;
    image?: string;
    incoming: false;
}

/*
import { CategoryModel } from './category.model';

export interface SavingModel {
    id?: number,
    category: CategoryModel,
    description: string,
    goaldate: string,
    amount: number,
    cumulated?: string,
    percentage?: string,
    creationDate: string
}*/