import { Request, Response } from 'express';
import { chatDB, chatHistory } from '../config/postgresql';

const getAllChats = async (req: Request, res: Response) => {
  try {
    // chatDB.forEach((chat) => {
    //   chatHistory.push({
    //     id: chat.id + new Date().getTime().toString(),
    //     txt: chat.id + ' - ' + chat.question,
    //     createdBy: "system",
    //   })
    // });
    const data = chatHistory
    return res.status(200).json({ status: true, data });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const getLatesChat = async (req: Request, res: Response) => {
  try {
    const data = chatHistory[chatHistory.length - 1]
    return res.status(200).json({ status: true, data });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const data = chatDB.find((item) => item.id === req.body.optionId);
    if (data) {
      chatHistory.push({
        id: chatHistory.length + new Date().getTime().toString(),
        txt: req.body.optionId,
        createdBy: "user",
      });
      chatHistory.push({
        id: chatHistory.length + new Date().getTime().toString(),
        txt: data.answer,
        createdBy: "system",
      });
      return res.status(201).json({ status: true, });
    } else {
      chatHistory.push({
        id: chatHistory.length + new Date().getTime().toString(),
        txt: req.body.optionId,
        createdBy: "user",
      });
      chatHistory.push({
        id: chatHistory.length + new Date().getTime().toString(),
        txt: `No options available`,
        createdBy: "system",
      });
      return res.status(404).json({ status: false, message: "No options available" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

export = { getAllChats, getLatesChat, post, }