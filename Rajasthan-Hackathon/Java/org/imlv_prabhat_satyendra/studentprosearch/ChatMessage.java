package org.imlv_prabhat_satyendra.studentprosearch;

/**

 * Wrapper class for message.
 */
public class ChatMessage {
    private String message;
    private boolean isUser;

    public ChatMessage(String message, boolean isUser) {
        this.message = message;
        this.isUser = isUser;
    }

    public String getMessage() {
        return message;
    }

    public boolean isUser() {
        return isUser;
    }
}
