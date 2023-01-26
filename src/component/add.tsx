import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import type{ Character, Episode } from "@prisma/client"
import { FieldGroup, string2Options } from "mui-easy-form"
import React from "react"
import { useForm } from "react-hook-form"
import { api } from "../utils/api"

export type AddCharacterProps = {
  refetch: () => Promise<unknown>
}
export function AddCharacter({ refetch }: AddCharacterProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        add
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        fullWidth
        maxWidth="sm"
      >
        <Form refetch={refetch} setOpen={setOpen} />
      </Dialog>
    </>
  )
}

function Form(
  props: AddCharacterProps & {
    setOpen: (open: boolean) => void
  }
) {
  const { refetch, setOpen } = props
  const add = api.character.create.useMutation({
    onSuccess: async () => {
      await refetch()
      setOpen(false)
    },
  })

  const { handleSubmit, reset, control } = useForm<Character>()
  const list:Episode[]=['ONE','TWO']
  return (
    <form
      onSubmit={handleSubmit((data) => {
        add.mutate(data)
      })}
      onReset={() => {
        reset()
      }}
      noValidate
    >
      <DialogTitle>add character</DialogTitle>
      <DialogContent>
        <FieldGroup<Character>
          fields={[
            {
              componentType: "TEXT",
              name: "name",
              required: true,
              label: "name",
            },
            {
              componentType: "TEXT",
              name: "description",
              required: true,
              label: "description",
              multiline: true,
              rows: 4,
              rules: {
                maxLength: 100,
              },
            },
            {
              componentType:'RADIO-GROUP',
              name:'episode',
              label:'episode',
              options:string2Options(list),
              required:true
            }
          ]}
          control={control}
        />
      </DialogContent>
      <DialogActions>
        <Button type="reset">Reset</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </form>
  )
}
