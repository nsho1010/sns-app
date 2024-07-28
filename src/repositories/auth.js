import { supabase } from "../lib/supabase";

export const authRepository = {
    // ユーザー登録機能
    async signup(name, email, password) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } },
        });
        if (error != null) throw new Error(error.message);
        return {
            ...data.user,
            userName: data.user.user_metadata.name,
        };
    },
    // ユーザーログイン機能
    async signin(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error != null) throw new Error(error.message);
        return {
            ...data.user,
            userName: data.user.user_metadata.name,
        };
    },
};
