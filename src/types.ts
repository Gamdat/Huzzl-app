export interface CreateAccountData {
    phone: string;
    name: string;
    location: string;
    password: string;
}

export interface ProfileData {
  bio: string;
  description: string;
  document: File | null;
  profileImage: string | null; 

}

export interface ServiceData{
category:string;
title: string;
currency: string;
price: string;
availability: string;
description: string;
}

export type Step = 1 | 2 | 3;