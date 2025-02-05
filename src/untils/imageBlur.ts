// import { getPlaiceholder } from 'plaiceholder';
// import fs from 'fs';
// import path from 'path';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { imagePath } = req.query;

//     if (typeof imagePath !== 'string') {
//         res.status(400).json({ error: 'Invalid image path' });
//         return;
//     }

//     try {
//         const imageBuffer = fs.readFileSync(path.join(process.cwd(), 'public', imagePath));
//         const { base64 } = await getPlaiceholder(imageBuffer);
//         res.status(200).json({ blurDataURL: base64 });
//     } catch (error) {
//         console.error('Error generating blur data URL:', error);
//         res.status(500).json({ error: 'Failed to generate blur data URL' });
//     }
// }
