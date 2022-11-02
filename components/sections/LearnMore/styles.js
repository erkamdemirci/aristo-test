import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-col-reverse lg:(flex-row) gap-4 my-12 md:(my-24) items-center px-4`}

  .left {
    ${tw`flex flex-col gap-6 pr-8 w-full lg:(w-[40%]) 2xl:(w-[50%])`}
    .title {
      ${tw`text-3xl md:(text-5xl) font-bold`}
    }
    .desc {
      ${tw`text-base md:(text-lg)`}
    }
    .actions {
      ${tw`flex gap-4`}
      button {
        ${tw`px-4 py-3 md:(px-6 py-3) rounded-lg font-semibold text-base md:(text-xl)`}

        &:hover {
          ${tw`underline`}
        }
      }

      .with-bg {
        ${tw`bg-blue-600 border-b-8 border-blue-900 transition-all ease-in-out duration-300`}

        &:hover {
          ${tw`bg-blue-700 mt-2 border-b-0 no-underline`}
        }
      }
    }
  }

  .right {
    ${tw`flex flex-col gap-6 w-full lg:(w-[60%]) 2xl:(w-[50%])`}
    .image {
      ${tw`w-full min-h-[200px] mb-4 lg:(min-h-[300px] mb-0) relative rounded-3xl overflow-hidden shadow-xl`}
      img {
        ${tw`w-full h-full`}
        object-fit: cover;
      }
    }
  }
`;
