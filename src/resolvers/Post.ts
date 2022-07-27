import { Context } from '..';

interface ProfileParentType {
  authorId: number;
}

export const Post = {
  user: async (parent: ProfileParentType, __: any, { prisma }: Context) => {
    return await prisma.user.findUnique({
      where: {
        id: parent.authorId,
      },
    });
  },
};
