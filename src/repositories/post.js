import { supabase } from "../lib/supabase";

export const postRepository = {
    // POSTをインサートする
    async create(content, userId) {
        const { data, error } = await supabase
            .from("posts")
            .insert([{ content, user_id: userId }])
            .select();
        if (error != null) throw new Error(error.message);
        return data[0];
    },
    //posts_viewからPostデータをすべて取得し、投稿の新しい順に並び替える
    async find() {
        const { data, error } = await supabase
            .from("posts_view")
            .select("*")
            .order("created_at", { ascending: false });
        if (error != null) throw new Error(error.message);
        return data.map((post) => {
            return {
                ...post,
                userId: post.user_id,
                userName: post.user_metadata.name,
            };
        });
    },
};
