import { drizzle} from "drizzle-orm/vercel-postgres"
import {pgTable,varchar,integer,serial} from "drizzle-orm/pg-core"
import {sql} from "@vercel/postgres"

export const contactus = pgTable("leadingedgecontactus", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 255 }).notNull(),
    message: varchar("message", { length: 255 }).notNull(),
  });

// export type contactus = InferModel<typeof contactus>
export const db = drizzle(sql)

// create table leadingedgeContactus(id serial PRIMARY KEY,name varchar(255),email varchar(255),phone int,message varchar(255))