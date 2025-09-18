const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '38px': '38px',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        konnect: ['Konnect', 'sans-serif'],
      },
      screens: {
        'max-md': { max: '767px' },
      }
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.header::before': {
          content: "''",
          background: 'linear-gradient(\n' +
            '  to bottom,\n' +
            '  rgba(255, 255, 255, 1) 0%, \n' +
            '  rgba(255, 255, 255, 1) 80%, \n' +
            '  rgba(255, 255, 255, 0.7) 85%, \n' +
            '  rgba(255, 255, 255, 0.3) 92%, \n' +
            '  rgba(255, 255, 255, 0) 100% \n' +
            ')',
          transition: 'opacity .3s ease-in-out, transform .3s ease',
          position: 'absolute',
          top: '-34px',
          left: '0',
          width: '100vw',
          right: '0',
          height: '136px',
          opacity: '0',
          zIndex: '-1',
          '@screen max-md': {
            height: '120px',
          },
          '@screen md': {
            height: '120px',
          }
        },
        '.scrolled': {
          '&::before': {
            opacity: '1',
          }
        },
        '.header-mobile': {
          '@screen max-md': {
            position: 'absolute !important',
            top: '50px',
            right: '0',
            opacity: '0',
            width: '100%',
            maxWidth: '176px',
            transform: 'translateX(100%)',
            transition: 'transform .3s, opacity .3s',
            border: '1px solid #E4E4E9 !important',
            background: '#E8E9ED',
            display: 'flex',
            flexDirection: 'column !important',
            alignItems: 'flex-start !important',
            padding: '13px 15px 14px !important',
            borderRadius: '19px !important',
            gap: '7px !important',
            '.button': {
              width: '100%',
              marginTop: '5px',
            },
            '&.active': {
              opacity: '1',
              transform: 'translateX(-20px)',
            },

            '.link': {
              padding: '0',
              background: 'transparent',

              '&.active': {
                color: '#303030 !important',
              }
            }
          },
          '@screen md': {
            'button': {
              display: 'none',
            }
          }
        },
        '.nav-hover-bg': {
          position: 'absolute',
          top: '3px',
          bottom: '3px',
          left: '0',
          height: 'calc(100% - 6px)',
          background: '#303030',
          borderRadius: '100px',
          transition: 'all 0.3s ease',
          zIndex: '0',
          '@screen max-md': {
            display: 'none',
          }
        },
        '.burger-menu': {
          'button': {
            '@screen max-md': {
              display: 'none',
            },
            '@screen lg': {
              display: 'none',
            }
          }
        },
        '.c-cont': {
          width: '100%',
          maxWidth: '1370px',
          padding: '0 20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {
            padding: '0 32px',
          },
          '@screen lg': {
            width: '86.80%',
            padding: '0',
          }
        },
        '.border-sec': {
          border: '1px solid #DEDEE373',
          background: '#F6F7F8',
        },
        '.font-logo': {
          fontSize: '17px',
          fontWeight: '500',
          lineHeight: '1',
          fontFamily: 'var(--font-gilroy)',
        },
        '.font-l': {
          fontSize: '11px',
          fontWeight: '500',
          lineHeight: '1',
          fontFamily: 'var(--font-konnect)',
          '@screen lg': {
            fontSize: '13px',
          }
        },
        '.font-t': {
          fontSize: '58px',
          fontWeight: '600',
          lineHeight: '1.1',
          '@screen md': {
            fontSize: '48px',
          },
          '@screen lg': {
            fontSize: '72px',
          },
          '@screen 2xl': {
            fontSize: '90px',
          },
        },
        '.font-s': {
          fontSize: '20px',
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '600',
          fontFamily: 'var(--font-gilroy)',
          '@screen md': {
            fontSize: '16px',
          },
          '@screen lg': {
            fontSize: '20px',
          },
          '@screen 2xl': {
            fontSize: '24px',
          },
        },
        '.font-a': {
          fontSize: '20px',
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '400',
        },
        '.font-e': {
          fontSize: '18px',
          fontWeight: '800',
          lineHeight: '1',
          '@screen 2xl': {
            fontSize: '20px',
          }
        },
        '.font-p': {
          fontSize: '14px',
          lineHeight: '1',
          fontWeight: '400',
          '@screen md': {
            lineHeight: '1.2',
          },
          '@screen 2xl': {
            fontSize: '16px',
          }
        },
        '.font-f': {
          fontSize: '28px',
          fontWeight: '700',
          lineHeight: '1.1',
          '@screen md': {
            fontSize: '42px',
          },
          '@screen 2xl': {
            fontSize: '48px',
          },
        },
        '.font-button': {
          fontSize: '16px',
          lineHeight: '1.4',
          letterSpacing: '0.02em',
          fontWeight: '600',
        },
        '.button': {
          minHeight: '57px',
          padding: '0 29px',
          whiteSpace: 'nowrap',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '38px',
          textTransform: 'Capitalize',
          transition: '.3s ease',
          clipPath: 'inset(1px round 38px)',
          'span': {
            position: 'relative',
            zIndex: '5',
            transition: '.3s ease',
          },
          '&.button-gray': {
            '&::before': {
              background: 'var(--c-black)'
            },
            '&:hover': {
              'span': {
                color: 'var(--c-white-1)'
              }
            }
          },
          '@screen md': {
            padding: '0 62px',
          }
        },
        '.button::before': {
          content: "''",
          position: 'absolute',
          bottom: '-200%',
          left: '0',
          width: '100%',
          height: '200%',
          zIndex: '1',
          background: 'var(--c-grey-2)',
          borderRadius: '50% 50% 0 0',
          transition: 'transform 0.3s ease',
          transform: 'translateY(0)',
        },
        '.button:hover::before': {
          transform: 'translateY(-100%)',
        },
        '.button:hover': {
          'span': {
            color: 'var(--c-black)',
          }
        },
        '.section': {
          position: 'relative',
        },
        '.s-wrap': {
          padding: '83px 0 33px 0',
          '@screen md': {
            padding: '126px 0 59px 0'
          },
          '@screen lg': {
            padding: '128px 0 85px 0'
          },
          '@screen 2xl': {
            padding: '197px 0 65px 0'
          }
        },
        '.m-wrap': {
          padding: '34px 0 33px 0',
          '@screen md': {
            padding: '60px 0 59px 0'
          },
          '@screen lg': {
            padding: '85px 0 85px 0'
          },
          '@screen 2xl': {
            padding: '65px 0 65px 0'
          }
        },
        '.defi-span': {
          position: 'relative',
          display: 'inline-block',
          paddingRight: '84px',

          '@screen md': {
            paddingRight: '0',
          },

          '&::after': {
            content: "''",
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '60px',
            height: '60px',
            backgroundImage: "url('/src/assets/images/title-decor.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            '@screen md': {
              display: 'none',
            },
          },

        },
        '.c-black-1': {
          color: 'var(--black-1)',
        },
        '.c-grey-1': {
          color: 'var(--c-grey-1)',
        },
        '.c-grey-2': {
          color: 'var(--c-grey-2)',
        },
        '.c-grey-3': {
          color: 'var(--c-grey-3)',
        },
        '.c-white-1': {
          color: 'var(--c-white-1)',
        },
        '.c-white-2': {
          color: 'var(--c-white-2)',
        },
        '.c-white-3': {
          color: 'var(--c-white-3)',
        },
        '.swiper': {
          width: '100%',
          overflow: 'visible',
          '@screen 2xl': {
            maxWidth: '1340px',
            marginLeft: 'auto',
            marginRight: '0',
          },
          '.swiper-wrapper': {
            width: '100%',
            maxWidth: '100%',
          },
          '.swiper-slide': {
            width: '100%',
            height: 'auto',
          },
          '.swiper-button-prev': {
            display: 'none',
          },
          '.swiper-button-next': {
            display: 'none',
          },
          '.swiper-pagination': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '5.6px',
            position: 'relative',
            inset: 'auto',
            marginTop: '21px',
            marginLeft: '31px',
            '@screen md': {
              marginTop: '-4px',
              marginLeft: '27px',
            },
            '@screen lg': {
              display: 'none',
            },
            '.swiper-pagination-bullet': {
              width: '28px',
              height: '4px',
              borderRadius: '148px',
              background: '#979797',
              '&.swiper-pagination-bullet-active': {
                background: '#5D625F',
              }
            }
          }
        }
      });
    }),
  ],
}
