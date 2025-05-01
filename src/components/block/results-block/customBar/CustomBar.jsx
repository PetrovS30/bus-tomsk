const CustomBar = ({ x, y, width, height, fill }) => {
    const strokeColor = '#3f5f95'; // Цвет обводки
    const strokeWidth = 2; // Ширина обводки
    return (
      <rect
      stroke={strokeColor} // Цвет обводки
      strokeWidth={strokeWidth} // Ширина
          x={x + 5} // Устанавливаем отступ слева
          y={y}
          width={width - 10} // Уменьшаем ширину для создания отступа справа
          height={height}
          fill={fill}
      />
  );
};

export default CustomBar;