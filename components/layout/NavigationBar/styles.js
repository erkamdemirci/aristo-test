import tw, { styled } from 'twin.macro';

export const NavigationBar = styled.header`
  ${tw`hidden md:(block) h-24 border-b-4 border-gray-900 bg-gray-900 bg-opacity-30`}
  .content {
    ${tw`h-full w-full container mx-auto flex flex-row`}

    .logo {
      ${tw`h-[75%] relative w-48 self-center`}
      img {
        object-fit: contain;
      }
    }

    .nav {
      ul {
        ${tw`flex flex-row gap-8 ml-12 h-full`}

        .nav-item {
          ${tw`font-semibold text-lg self-center`}

          &:hover:not(.atolye) {
            ${tw`text-gray-200`}
          }
        }

        .nav-item.active {
          ${tw`relative`}
          &::after {
            content: ' ';
            ${tw`w-full h-5 bg-white absolute top-[40px] left-0`}
            background: radial-gradient(50px circle at 50% 50px, #154df6 50%, transparent 100%),radial-gradient(30px circle at 50% 40px, #fff 50%, transparent 100%);
          }
        }

        .atolye {
          ${tw`text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#154df6] to-[#e7edfe]`}
        }
      }
    }
  }
`;
