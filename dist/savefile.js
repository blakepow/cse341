"use strict";
//save text file
// export const saveTextFile = (req: Request, res: Response, next: NextFunction) => {
//     const text = req.body.text;
//     const fileName = req.body.fileName;
//     const filePath = path.join(__dirname, '..', 'uploads', 'text', fileName);
//     fs.writeFile(filePath, text, (err) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({message: 'Could not save file.'})
//         }
//         res.status(201).json({message: 'File saved.'})
//     })
// }
//
