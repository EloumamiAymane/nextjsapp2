
export const metadata = {
  title: "InseaPro",
  description: "Réseaux des anciens Lauréats de l'Insea ",
  icons:{
    icon:['/insea.ico?v=4'],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]

  },
  manifest:'/site.webmanifest'

};

export default function RootLayout({ children }) {
  return (

<>
    {children}
</>
  )
}
