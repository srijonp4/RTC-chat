# RTC-Chat

RTC-Chat is a real-time video and voice chat application built using WebRTC.

## Features

- [x] Get public IP using STUN servers
- [x] Get ICE candidates
- [x] Set local and remote session descriptions
- [x] Negotiate and establish connection
- [x] P2P video chat
- [ ] P2P video + voice
- [ ] Mute/unmute microphone
- [ ] Toggle camera on/off
- [ ] Leave the room
- [ ] In-room text chat (like Omegle)
- [ ] Support for multiple users in a chat (SNU for multiple users)
- [ ] Deployment and scaling

## Architecture

### Client

- **React**: Front-end framework
- **Socket.io-client**: For real-time communication
- **WebRTC**: For video and voice communication

### Server

- **Node.js**: Runtime environment
- **Socket.io**: For real-time signaling

### Flow

1. **Connection Establishment**: Users connect to the signaling server using Socket.io.
2. **Room Joining**: Users join a room using their email and room ID.
3. **STUN/TURN**: Public IP and ICE candidates are gathered using STUN servers.
4. **Signaling**: WebRTC signaling messages (offer/answer) are exchanged via the signaling server.
5. **P2P Connection**: Direct P2P connection is established for video and voice communication.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request
