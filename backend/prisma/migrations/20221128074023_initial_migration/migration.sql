CREATE TABLE "public"."User" (
  "id" SERIAL,
  "email" text  NOT NULL ,
  "name" text   ,
  PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
  "id" SERIAL,
  "title" text  NOT NULL ,
  "content" text   ,
  "published" boolean  NOT NULL DEFAULT false,
  "authorId" integer   ,
  PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE