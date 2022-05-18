import { Button, Stack } from "@mui/material";
import Link from 'next/link';
import { useRouter } from "next/router";

export const LocaleSwitch = (props) => {
  const router = useRouter();
  return <Stack direction={'row'} spacing={2}>
    <Link
      href={router.asPath}
      locale={'ar'}
    >
      <Button
        variant={'text'}
        component={'a'}
        color={'primary'}
        sx={{
          border: 'none',
          color: props.lang === 'ar' ? "rgb(80, 72, 229)" : "rgb(255, 255, 255, 0.4)",
          borderBottom: props.lang === 'ar' ? "1px solid rgb(80, 72, 229)" : "1px solid rgb(255, 255, 255, 0.4)",
          '&:hover': {
            border: 'none',
            outline: 'none',
            borderBottom: props.lang === 'ar' ? "1px solid rgb(80, 72, 229)" : "1px solid rgb(255, 255, 255, 0.4)",
          }
        }}
      >
        Ar
      </Button>
    </Link>
    <Link
      locale={'en'}
      href={router.asPath}>
      <Button
        variant={'text'}
        color={'primary'}
        component={'a'}
        sx={{
          border: 'none',
          borderBottom: props.lang === 'en' ? "1px solid rgb(80, 72, 229)" : "1px solid rgb(255, 255, 255, 0.4)",
          color: props.lang === 'en' ? "rgb(80, 72, 229)" : "rgb(255, 255, 255, 0.4)",
          '&:hover': {
            border: 'none',
            outline: 'none',
            borderBottom: props.lang === 'en' ? "1px solid rgb(80, 72, 229)" : "1px solid rgb(255, 255, 255, 0.4)",
          }
        }}
      >
        En
      </Button>
    </Link>
  </Stack>
}
export const LangSwitch = ({ lang, setLang }) => {
  return <> <Button
    variant={"text"}
    color={"primary"}
    onClick={() => setLang("AR")}
    sx={{
      border: "none",
      borderBottom:
        lang === "AR"
          ? "1px solid rgb(80, 72, 229)"
          : "1px solid rgb(255, 255, 255, 0.4)",
      color:
        lang === "AR"
          ? "rgb(80, 72, 229)"
          : "rgb(255, 255, 255, 0.4)",
      "&:hover": {
        border: "none",
        outline: "none",
        borderBottom:
          lang === "AR"
            ? "1px solid rgb(80, 72, 229)"
            : "1px solid rgb(255, 255, 255, 0.4)",
        color:
          lang === "AR"
            ? "rgb(80, 72, 229)"
            : "rgb(255, 255, 255, 0.4)",
      },
    }}
  >
    Ar
  </Button>
    <Button
      variant={"text"}
      color={"primary"}
      onClick={() => setLang("EN")}
      sx={{
        border: "none",
        borderBottom:
          lang === "EN"
            ? "1px solid rgb(80, 72, 229)"
            : "1px solid rgb(255, 255, 255, 0.4)",
        color:
          lang === "EN"
            ? "rgb(80, 72, 229)"
            : "rgb(255, 255, 255, 0.4)",
      }}
    >
      En
    </Button>
  </>
}