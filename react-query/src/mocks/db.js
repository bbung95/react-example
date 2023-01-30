import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
    user: {
        id: primaryKey(),
        nickName: "",
        email: "",
    },
});

db.user.create({
    id: 1,
    nickName: "bbung95",
    email: "bbung95@gmail.com",
});
