package data;

public class Movie {
    private String title;
    private String body;
    private String poster;
    private int id;


    public Movie() {

    }

    public Movie(String title, String body, String poster, int id) {
        this.title = title;
        this.body = body;
        this.poster = poster;
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}


