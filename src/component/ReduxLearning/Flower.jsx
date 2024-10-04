// import { useGetFlowerByNameQuery } from "../../reduxpractice/services/services";

// export const Flower = () => {
//   const { data, error, isLoading, isFetching } =
//     useGetFlowerByNameQuery("sweet");

//   console.log(useGetFlowerByNameQuery);

//   return (
//     <>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           <h3>
//             {data.name}
//             {isFetching ? "..." : ""}
//           </h3>
//           {/* <img src={data.sprites.front_default} alt={data.species.name} /> */}
//         </>
//       ) : null}
//     </>
//   );
// };
