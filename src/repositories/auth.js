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
    //ユーザー情報を取得する
    async getCurrentUser() {
        const { data, error } = await supabase.auth.getSession();
        if (error != null) throw new Error(error.message);
        if (data.session == null) return;
        return {
            ...data.user,
            userName: data.session.user.user_metadata.name,
        };
    },
};
