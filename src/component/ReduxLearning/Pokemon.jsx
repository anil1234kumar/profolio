import { useGetPokemonByNameAllQuery } from "../../reduxpractice/services/services";

export const Pokemon = ({ name }) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameAllQuery();
  console.log("data::", data);
  console.log("data::", error);
  return (
    <>
      {/* {data?.results?.map((item, index) => {
        return <p>{item?.name}</p>;
      })} */}

      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null} */}
    </>
  );
};
