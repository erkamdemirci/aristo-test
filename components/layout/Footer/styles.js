import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.footer`
  ${tw`w-full bg-gray-900 flex flex-col border-t-8 border-[rgba(250, 47, 181, 0.1)] `}

  filter: drop-shadow(0px 0px 40px rgba(250, 47, 181, 0.35));

  .content {
    ${tw`container text-center sm:(text-left) mx-auto flex flex-col flex-wrap sm:(flex-row) py-12`}

    .column {
      ${tw`w-full sm:(w-[33%]) xl:(w-[20%]) p-4 `}

      .yasam-logo {
        ${tw`w-48 h-20 relative mx-auto sm:(mx-0) mb-4`}

        img {
          object-fit: contain;
        }
      }

      .title {
        ${tw`font-bold mb-4 text-2xl sm:(text-xl)`}
      }

      .nav-items {
        ${tw`flex flex-col gap-2`}

        .item {
          ${tw`font-light text-lg sm:(text-base)`}
          &:hover {
            ${tw`font-normal`}
          }
        }

        .social-icons {
          ${tw`mx-auto sm:(mx-0) flex flex-row gap-2`}
          .icon {
            ${tw`text-white fill-current cursor-pointer transition-all duration-300 w-8 h-8`}
            &:hover {
              ${tw`text-purple-500`}
            }
          }
        }

        button.reach-us {
          ${tw`mx-auto sm:(mx-0) py-2 px-4 border-2 rounded-lg w-max mt-2`}
        }

        .item.logo {
          ${tw`mx-auto sm:(mx-0) font-extrabold w-max text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#154df6] to-[#e7edfe] transition-all duration-300`}

          &:hover {
            ${tw`text-[#e7edfe]`}
          }
        }
      }
    }

    .column.info {
      ${tw`flex flex-col gap-1`}
      span {
        ${tw``}
      }
    }
  }
  .copyright {
    ${tw`p-4 text-center sm:(text-left) border-t border-[rgba(255,255,255,.1)] tracking-wider font-light`}
  }
`;
