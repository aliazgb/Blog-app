export type SignupInput = {
    // name: string;
    email: string;
    password: string;
};

export type SigninInput = {
    email: string;
    password: string;
};


export type User = {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};

export type SignupResponse = {
    user: User;
    message: string;
};

