export interface PullRequest {
    comment_count: number;
    task_count: number;
    type: string;
    id: number;
    title: string;
    description: string;
    rendered: Rendered;
    state: string;
    merge_commit: null;
    close_source_branch: boolean;
    closed_by: null;
    author: Author;
    reason: string;
    created_on: string;
    updated_on: string;
    destination: Destination;
    source: Destination;
    reviewers: any[];
    participants: UserResponse[];
    links: { [key: string]: Link };
    summary: Summary;
}

export interface Author {
    display_name: string;
    links: AuthorLinks;
    type: string;
    uuid: string;
    account_id: string;
    nickname: string;
}

export interface AuthorLinks {
    self: Link;
    avatar: Link;
    html: Link;
}

export interface Link {
    href: string;
}

export interface Destination {
    branch: Branch;
    commit: Commit;
    repository: Repository;
}

export interface Branch {
    name: string;
}

export interface Commit {
    type: string;
    hash: string;
    links: CommitLinks;
}

export interface CommitLinks {
    self: Link;
    html: Link;
}

export interface Repository {
    type: string;
    full_name: string;
    links: AuthorLinks;
    name: string;
    uuid: string;
}

export interface Rendered {
    title: Summary;
    description: Summary;
}

export interface Summary {
    type: string;
    raw: string;
    markup: string;
    html: string;
}

export interface UserResponse {
    type: string;
    user: User;
    role: string;
    approved: boolean;
    state: null;
    participated_on: string;
}

export interface User {
    display_name: string;
    links: Links;
    type: string;
    uuid: string;
    account_id: string;
    nickname: string;
}

export interface Links {
    self: Avatar;
    avatar: Avatar;
    html: Avatar;
}

export interface Avatar {
    href: string;
}
