const COLORS = {
    neutral: {
      1: '#FAFAFA',
      2: '#E0E0E0',
      3: '#BDBDBD',
      4: '#9E9E9E',
      5: '#757575',
      6: '#616161',
      7: '#424242',
      8: '#212121',
      9: '#F5F5F5',
      10: '#EEEEEE',
      text1: '#000000', // Black for light neutral background
      text2: '#212121', // Dark gray for light gray background
      text3: '#424242', // Darker gray for medium gray background
      text4: '#616161', // Darker gray for darker gray background
      text5: '#9E9E9E', // Light gray for dark background
      text6: '#BDBDBD', // Light gray for darker background
      text7: '#E0E0E0', // Light gray for very dark background
      text8: '#FFFFFF', // White for very dark background
      text9: '#212121', // Dark gray for very light background
      text10: '#424242', // Dark gray for light background
    },
    primary: {
      DEFAULT: '#0D47A1',
      selected: '#1976D2',
      text: '#FFFFFF', // White text for primary background
    },
    secondary: {
      DEFAULT: '#388E3C',
      selected: '#4CAF50',
      text: '#FFFFFF', // White text for secondary background
    },
    success: {
      DEFAULT: '#2E7D32',
      selected: '#388E3C',
      text: '#FFFFFF', // White text for success background
    },
    danger: {
      DEFAULT: '#C62828',
      selected: '#D32F2F',
      text: '#FFFFFF', // White text for danger background
    },
    warning: {
      DEFAULT: '#F9A825',
      selected: '#FFB300',
      text: '#000000', // Black text for warning background
    },
    info: {
      DEFAULT: '#0288D1',
      selected: '#039BE5',
      text: '#FFFFFF', // White text for info background
    },
    light: {
      DEFAULT: '#F1F1F1',
      selected: '#E0E0E0',
      text: '#000000', // Black text for light background
    },
    dark: {
      DEFAULT: '#212121',
      selected: '#424242',
      text: '#FFFFFF', // White text for dark background
    },
    white: {
      DEFAULT: '#FFFFFF',
      selected: '#F9F9F9',
      text: '#000000', // Black text for white background
    },
    black: {
      DEFAULT: '#000000',
      selected: '#212121',
      text: '#FFFFFF', // White text for black background
    },
  };

  const BACKGROUND_COLORS = {
    'neutral-1': COLORS.neutral[1],
    'neutral-2': COLORS.neutral[2],
    'neutral-3': COLORS.neutral[3],
    'neutral-4': COLORS.neutral[4],
    'neutral-5': COLORS.neutral[5],
    'neutral-6': COLORS.neutral[6],
    'neutral-7': COLORS.neutral[7],
    'neutral-8': COLORS.neutral[8],
    'neutral-9': COLORS.neutral[9],
    'neutral-10': COLORS.neutral[10],
    'primary': COLORS.primary.DEFAULT,
    'primary-selected': COLORS.primary.selected,
    'secondary': COLORS.secondary.DEFAULT,
    'secondary-selected': COLORS.secondary.selected,
    'success': COLORS.success.DEFAULT,
    'success-selected': COLORS.success.selected,
    'danger': COLORS.danger.DEFAULT,
    'danger-selected': COLORS.danger.selected,
    'warning': COLORS.warning.DEFAULT,
    'warning-selected': COLORS.warning.selected,
    'info': COLORS.info.DEFAULT,
    'info-selected': COLORS.info.selected,
    'light': COLORS.light.DEFAULT,
    'light-selected': COLORS.light.selected,
    'dark': COLORS.dark.DEFAULT,
    'dark-selected': COLORS.dark.selected,
    'white': COLORS.white.DEFAULT,
    'white-selected': COLORS.white.selected,
    'black': COLORS.black.DEFAULT,
    'black-selected': COLORS.black.selected,
  };

  const TEXT_COLORS = {
    'neutral-1': COLORS.neutral.text1,
    'neutral-2': COLORS.neutral.text2,
    'neutral-3': COLORS.neutral.text3,
    'neutral-4': COLORS.neutral.text4,
    'neutral-5': COLORS.neutral.text5,
    'neutral-6': COLORS.neutral.text6,
    'neutral-7': COLORS.neutral.text7,
    'neutral-8': COLORS.neutral.text8,
    'neutral-9': COLORS.neutral.text9,
    'neutral-10': COLORS.neutral.text10,
    'primary': COLORS.primary.text,
    'primary-selected': COLORS.primary.text,
    'secondary': COLORS.secondary.text,
    'secondary-selected': COLORS.secondary.text,
    'success': COLORS.success.text,
    'success-selected': COLORS.success.text,
    'danger': COLORS.danger.text,
    'danger-selected': COLORS.danger.text,
    'warning': COLORS.warning.text,
    'warning-selected': COLORS.warning.text,
    'info': COLORS.info.text,
    'info-selected': COLORS.info.text,
    'light': COLORS.light.text,
    'light-selected': COLORS.light.text,
    'dark': COLORS.dark.text,
    'dark-selected': COLORS.dark.text,
    'white': COLORS.white.text,
    'white-selected': COLORS.white.text,
    'black': COLORS.black.text,
    'black-selected': COLORS.black.text,
  };

  const BORDER_COLORS = {
    'neutral-1': COLORS.neutral[1],
    'neutral-2': COLORS.neutral[2],
    'neutral-3': COLORS.neutral[3],
    'neutral-4': COLORS.neutral[4],
    'neutral-5': COLORS.neutral[5],
    'neutral-6': COLORS.neutral[6],
    'neutral-7': COLORS.neutral[7],
    'neutral-8': COLORS.neutral[8],
    'neutral-9': COLORS.neutral[9],
    'neutral-10': COLORS.neutral[10],
    'primary': COLORS.primary.DEFAULT,
    'primary-selected': COLORS.primary.selected,
    'secondary': COLORS.secondary.DEFAULT,
    'secondary-selected': COLORS.secondary.selected,
    'success': COLORS.success.DEFAULT,
    'success-selected': COLORS.success.selected,
    'danger': COLORS.danger.DEFAULT,
    'danger-selected': COLORS.danger.selected,
    'warning': COLORS.warning.DEFAULT,
    'warning-selected': COLORS.warning.selected,
    'info': COLORS.info.DEFAULT,
    'info-selected': COLORS.info.selected,
    'light': COLORS.light.DEFAULT,
    'light-selected': COLORS.light.selected,
    'dark': COLORS.dark.DEFAULT,
    'dark-selected': COLORS.dark.selected,
    'white': COLORS.white.DEFAULT,
    'white-selected': COLORS.white.selected,
    'black': COLORS.black.DEFAULT,
    'black-selected': COLORS.black.selected,
  };

  export { COLORS, BACKGROUND_COLORS, TEXT_COLORS, BORDER_COLORS };
