import { Episode } from "@prisma/client"
import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const characterRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.character.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    })
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        episode: z.nativeEnum(Episode),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.character.create({
        data: input,
      })
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        episode: z.nativeEnum(Episode),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.character.update({
        data: input,
        where: {
          id: input.id,
        },
      })
    }),
  delete: publicProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.prisma.character.delete({
      where: {
        id: input,
      },
    })
  }),
})
