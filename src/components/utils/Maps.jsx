import imagenMapa from '../../assets/mapa.png';

export const Maps = () => {
  const url = `https://www.google.com/maps/place/Athens+Hotel+%26+Suites/@29.7631816,-95.3683371,13.55z/data=!4m9!3m8!1s0x8640bf3d04ed27b5:0x8676548c11396820!5m2!4m1!1i2!8m2!3d29.7521318!4d-95.3644903!16s%2Fg%2F1tj73zxf?entry=ttu`;

  return (
    <div className="flex flex-col items-center">
      <img src={imagenMapa} alt="mapa" className="max-w-full" />
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4">
        <input type="submit" value="Ir Alla!" className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" />
      </a>
    </div>
  );
};
