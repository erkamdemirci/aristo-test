import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-col items-center gap-12 my-12  px-8`}
  .header {
    ${tw`text-center flex flex-col gap-4`}
    .section-title {
      ${tw`font-bold text-4xl`}
    }
    .section-description {
      ${tw`text-xl font-light`}
    }
  }

  .items {
    ${tw`flex flex-col lg:(flex-row) gap-6`}
    .card {
      ${tw`w-full lg:(max-w-[325px]) px-8 pt-12 pb-8 rounded-3xl overflow-hidden bg-[#1e1e1e] flex flex-col gap-8`}
      filter: drop-shadow(0px 0px 20px rgba(116, 159, 130, .2));
      .plan {
        ${tw`flex flex-col gap-1`}
        .name {
          ${tw`font-bold text-xl`}
        }
        .price {
          ${tw`font-bold text-5xl text-blue-700`}
        }
      }
      .logo {
        ${tw`font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#154df6] via-[#e7edfe] to-[#e7edfe]`}
        line-height: 75px;
      }
      .desc {
        ${tw`flex-grow lg:(pb-20) text-lg pr-4`}
      }
      button {
        ${tw`border-2 text-xl font-semibold rounded-lg w-max px-4 py-2`}
      }

      &:last-child {
        filter: drop-shadow(0px 0px 10px rgba(96, 118, 190, 1));
      }
    }
  }
`;
